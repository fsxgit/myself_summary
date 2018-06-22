<?php
//$obj = new COM('com.sun.star.ServiceManager') or die('Unable to instanciate Word');
//echo 111;die;
set_time_limit(0);
function MakePropertyValue($name,$value,$osm){
$oStruct = $osm->Bridge_GetStruct("com.sun.star.beans.PropertyValue");
$oStruct->Name = $name;
$oStruct->Value = $value;
return $oStruct;
}
function word2pdf($doc_url, $output_url){
$osm = new COM("com.sun.star.ServiceManager") or die ("Please be sure that OpenOffice.org is installed.n");
$args = array(MakePropertyValue("Hidden",true,$osm));
$oDesktop = $osm->createInstance("com.sun.star.frame.Desktop");
$oWriterDoc = $oDesktop->loadComponentFromURL($doc_url,"_blank", 0, $args);
$export_args = array(MakePropertyValue("FilterName","writer_pdf_Export",$osm));
$oWriterDoc->storeToURL($output_url,$export_args);
$oWriterDoc->close(true);
//$oWriterDoc->Quit();
}
$output_dir = "D:/WWW/PHP-PDF/";
$doc_file = "D:/WWW/PHP-PDF/ccc.docx";
$pdf_file = "5.pdf";
$output_file = $output_dir . $pdf_file;
$doc_file = "file:///" . $doc_file;
$output_file = "file:///" . $output_file;
word2pdf($doc_file,$output_file);
?>