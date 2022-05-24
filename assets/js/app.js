const url='https://hoseinerfani.github.io/store-master/product-single.html'


$('.owl-stage > div').on('click',function(e){

    e.preventDefault()
        window.open(url);
    })
    
    
    $('.product-offers > div').on('click',function(e){
    
    e.preventDefault()
        window.open(url);
    })
    
    $('.forgot-password').on('click',function(e){
        $('#signin-modal').modal('hide');
        $('#forgot-password-modal').modal('show');
    })