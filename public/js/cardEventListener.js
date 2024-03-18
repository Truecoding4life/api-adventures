$(document).ready(function() {
        // Select all elements you want to add the event listener to
        $('.card-to-listen').each(function() {
            // Inside the each function, 'this' refers to each individual element
            $(this).on('click', function() {
                let id = $(this).children('.post-id').text()
                location.href = '/resource/'+ id ;
            });
        });
    });
