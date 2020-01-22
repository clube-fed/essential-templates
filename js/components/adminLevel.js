//client request to hide certain module stuff different levels 
$adLevel = "-1";

if (!($adLevel == "3" || $adLevel == "5" || $adLevel == "9")) {
  /*$j('#axisCalendarModuleWrapper #calendarLinkBar').remove();*/
  $j('.module #articlePrintLink').hide();
}

if ($adLevel == "0") {
  $j('#axisCalendarModuleWrapper #calendarLinkBar').remove();
}