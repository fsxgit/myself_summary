<?php
$filename = "./" . date ( 'YmdH' ) . ".zip"; // �������ɵ��ļ�������·����
// �����ļ�
$zip = new ZipArchive (); // ʹ�ñ��࣬linux�迪��zlib��windows��ȡ��php_zip.dllǰ��ע��
if ($zip->open ( $filename, ZIPARCHIVE::CREATE ) !== TRUE) {
    exit ( '�޷����ļ��������ļ�����ʧ��' );
}

//$fileNameArr ����һ���洢�ļ�·�������� ���� array('/a/1.jpg,/a/2.jpg....');
$fileNameArr = array('./2.pdf','./2.doc','./3.pdf','./4.pdf','./5.pdf','./3.doc');
foreach ( $fileNameArr as $val ) {
    $zip->addFile ( $val, basename ( $val ) ); // �ڶ��������Ƿ���ѹ�����е��ļ����ƣ�����ļ����ܻ����ظ�������Ҫע��һ��
}
$zip->close (); // �ر�

//�������������;
header ( "Cache-Control: max-age=0" );
header ( "Content-Description: File Transfer" );
header ( 'Content-disposition: attachment; filename=' . basename ( $filename ) ); // �ļ���
header ( "Content-Type: application/zip" ); // zip��ʽ��
header ( "Content-Transfer-Encoding: binary" ); // ��������������Ƕ������ļ�
header ( 'Content-Length: ' . filesize ( $filename ) ); // ������������ļ���С
@readfile ( $filename );//����ļ�;

?>