(function () {
    var imageUpload = function () {
        var self = this;
        this.selector = {
            fileInput: document.getElementById('imageUploadInput'),
            fileInputBtn: document.getElementById('imageUploadInputBtn'),
            status: document.getElementById('uploadFileStatus')
        };
        this.imageData = "";
        this.fileTypes = ['image/png', 'image/jpeg'];
        this.maxSize =1024; // 1MB
        this.onChangeInput = function (e) {
            // Reset file data / image preview
            self.selector.status.innerHTML = '';
            self.selector.imagePreview.setAttribute('src', "../Hinh/HinhSauDN/taikhoan.png");
            self.imageData='';
            
            // Validate file type
            if (this.fileTypes.indexOf(file.type) == -1) {
                self.selector.status.innerHTML = "File không hợp lệ (chỉ file hình jpg và hình png được chấp nhận)";
                return;
            }         
            // Validate file size
            if (file.size > this.maxSize) {
                self.selector.status.innerHTML = "Dung lượng file vượt quá giới hạn (tối đa 1MB được chấp nhận)";
                return;
            }
        };
        
        /*
         * Event trigger
         */
        this.selector.fileInput.addEventListener('change', function (e) {
            self.onChangeInput(e);
        });
        this.selector.fileInputBtn.addEventListener('click', function () {
            self.selector.fileInput.click();
        });
       
    };
    window.addEventListener("DOMContentLoaded", function () {
        console.log('DOM is loaded');
        new imageUpload();
    });
})();


// ////

function thongBao(){

}

function change(){
    var date=parseInt( document.getElementById('date').value);
    if(date>31){
        alert("Nhập lại ngày");
    }
}

