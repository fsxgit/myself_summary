

var imgFile = [];
function imgUpload(obj) {
    var oInput = '#' + obj.inputId;

    $(oInput).on("change", function() {
        var fileImg = $(oInput)[0];
        var fileList = fileImg.files;
        for(var i = 0; i < fileList.length; i++) {
            imgFile.push(fileList[i]);
        }
        var data = new Object;
        data[obj.data] = imgFile;
        submitPicture(obj.upUrl, data);
    });
}

function submitPicture(url,data) {
    console.log(data);
    alert('图片开始上传');
    if(url&&data){
        $.ajax({
            type: "post",
            url: url,
            async: true,
            data: data,
            traditional: true,
            success: function(dat) {
                //			console.log(dat);
            }
        });
    }
}
