var modal = document.getElementById('modal');
var closeModal = document.getElementById('close-modal');
var productBlocks = document.getElementsByClassName('product-block');
var overlayBlocks = document.getElementsByClassName('product-overlay-blocks');

for(var i = 0; i < productBlocks.length; i++) {
    productBlocks[i].addEventListener('click', function() {
        this.getElementsByClassName('product-overlay-blocks')[0].style.display = 'flex';
        modal.style.display = 'block';
    });
}

closeModal.addEventListener('click', function() {
    for(var i = 0; i < overlayBlocks.length; i++) {
        overlayBlocks[i].style.display = 'none';
    }
    modal.style.display = 'none';
});
