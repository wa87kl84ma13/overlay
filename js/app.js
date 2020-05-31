$('.product-block').click(function() {
    $(this).find('.product-overlay-blocks').css('display', 'flex');
    $('#modal').css('display', 'block');
})

$('#close-modal').click(function() {
    $('#modal').css('display', 'none');
    $('.product-overlay-blocks').css('display', 'none');
});
