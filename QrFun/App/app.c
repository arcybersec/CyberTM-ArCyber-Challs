#include <curl/curl.h>
#include <curl/easy.h>
#include <malloc.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define PASSLEN 32
// gcc app.c -o app -lcurl

void banner() {
  printf("               _______                 \n"
         "               |  ___|                 \n"
         "      __ _ _ __| |_ _   _ _ __         \n"
         "     / _` | '__|  _| | | | '_ \\       \n"
         "    | (_| | |  | | | |_| | | | |       \n"
         "    |__,  |_|  |_| |_____| |_| |       \n"
         "        | |                            \n"
         "        |_|                            \n"
         "                                       \n"
         "  - Enterprise Level Qr Generator -    \n\n"
         "       ---------------------           \n\n"
         "     Enter password to continue:        \n");
}

char *generate_password() {
  char *str = (char *)malloc(sizeof(char) * PASSLEN);

  if (str == NULL) {
    fprintf(stderr, "Memory allocation failed!");
    exit(1);
  }

  srand(time(NULL));

  for (int i = 0; i < PASSLEN; i++) {
    int t = rand() % 3;
    switch (t) {
    case 0:
      str[i] = 'A' + rand() % 26;
      break;
    case 1:
      str[i] = 'a' + rand() % 26;
      break;
    case 2:
      str[i] = '1' + rand() % 10;
      break;
    default:
      break;
    }
  }

  str[PASSLEN] = '\0';

  return str;
}

void generate_qr(char *data) {
  char command[278] =
      "qrencode \"http://192.168.1.109:8080/?qrId=";

  strcat(command, data);
  strcat(command, "\" -o qrcode.png");

  printf(command);

  system(command);
  printf("QrCode saved as: qrcode.png");

  free(data);
}

size_t write_callback(char *ptr, size_t size, size_t nmemb, char **id) {
  size_t total_size = size * nmemb;

  *id = (char *)malloc(total_size + 1);
  if (*id == NULL) {
    fprintf(stderr, "Memory allocation failed\n");
    return 0;
  }

  memcpy(*id, ptr, total_size);

  return total_size;
}

char *get_identifier(const char *api_endpoint) {
  CURL *curl;
  CURLcode res;
  char *data = NULL;

  curl = curl_easy_init();
  if (curl) {
    curl_easy_setopt(curl, CURLOPT_URL, api_endpoint);
    curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, write_callback);
    curl_easy_setopt(curl, CURLOPT_WRITEDATA, &data);
    curl_easy_setopt(curl, CURLOPT_TIMEOUT, 1);

    res = curl_easy_perform(curl);

    if (res != CURLE_OK) {
      fprintf(stderr, "curl_easy_perform() failed: %s\n",
              curl_easy_strerror(res));
      free(data);
      data = NULL;
    }
    curl_easy_cleanup(curl);
  } else {
    fprintf(stderr, "Failed to initialize libcurl\n");
  }

  char *identifier_value = strstr(data, "id") + 5;
  *(identifier_value + 36) = '\0';

  char *real_id = (char *)malloc(sizeof(char) * 37);

  strncpy(real_id, identifier_value, 36);

  free(data);
  return real_id;
}

void generate_code() {
  char url_string[256];
  char api_endpoint[512];

  printf("Enter URL to generate QR from:\n");
  fgets(url_string, sizeof(url_string), stdin);

  url_string[strcspn(url_string, "\n")] = '\0';

  int result =
      snprintf(api_endpoint, sizeof(api_endpoint), "%s%s",
               "http://192.168.1.109:5000/api/qr/generate/", url_string);
  if (result < 0 || result >= sizeof(api_endpoint)) {
    fprintf(stderr, "Error: API endpoint URL is too long\n");
    return;
  }

  char *id = get_identifier(api_endpoint);
  if (id != NULL) {
    generate_qr(id);
  } else {
    printf("Failed to get identifier from the API\n");
  }
}
int main(void) {

  char upass[PASSLEN + 1];
  char *pass = NULL;

  pass = generate_password();

  banner();

  fgets(upass, PASSLEN + 1, stdin);

  printf("%s\n", upass);
  if (strcmp(upass, pass) == 0) {
    printf("Welcome admin!\n");
    generate_code();
  } else {
    printf("Password wasn't good! bye bye");
    exit(1);
  }

  return 0;
}
