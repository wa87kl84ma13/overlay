var modal = document.getElementById('modal');
var closeModal = document.getElementById('close-modal');
var productBlocks = document.querySelectorAll('.product-block');
var overlayBlocks = document.querySelectorAll('.product-overlay-blocks');

productBlocks.forEach(function(block) {
    block.addEventListener('click', function() {
        this.getElementsByClassName('product-overlay-blocks')[0].style.display = 'flex';
        this.getElementsByClassName('product-overlay-blocks')[0].style.display = 'flex';
        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', function() {
    overlayBlocks.forEach(function(overlay) {
        overlay.style.display = 'none';
    });
    modal.style.display = 'none';
});