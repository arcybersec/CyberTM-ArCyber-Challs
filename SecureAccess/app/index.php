<?php
$blacklist = array('`', 'shell_exec', 'exec', 'system', 'passthru', 'proc_open', 'popen', 'pcntl_exec');

# This is a very secure code!
# Only to be used in dev! Do not use in production!
if (!isset($_GET['debug'])){
  echo "<span> Warning! Unauthorized access is strictly forbidden! </span>";
}

$code = $_GET["debug"];

foreach ($blacklist as $func) {
  if (stripos($code, $func) !== false) {
    die("You are not allowed to use the function $func");
  }
}

echo(eval($code));

echo("<p> API Version 2.0.0 dev branch build </p>");

?>
