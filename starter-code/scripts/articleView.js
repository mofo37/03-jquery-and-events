//  Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};

//articleView is an object and we're declaring a method on it, called populateFilters
articleView.populateFilters = function () {
  //article is an object and we are saying "hey, this is an object and everything on the object that's not //templat, do this function. "
  $('article').not('.template').each(function () {
    //declaring 3 new variables
    var authorName, category, optionTag;
    //authorName is equal to whatever we're targeting, which is equal to 'address a', we will apply text to it. So what authorName is returning is the text and where we're returning it is within the 'address a'...
    authorName = $(this).find('address a').text();
    //we are giving optionTag an identity, which is "I don't know what the fuck it is...". Okay we're creating a string which is... We're giving a value tag to the option tag in HTML, which will be the author's name in the form of a string. And within that option we will also have text that will be author's name. We're creating option tag in javascript and sending it to HTML, with value of author name.
    optionTag = '<option value="' + authorName + '">' + authorName + '</option>';
    //appending OptionTag to #author-filter
    $('#author-filter').append(optionTag);
    //taking variable category and creating placeholder for DOM with 'this'. We are applying 'data-category' to apply it to 'this' in the future.
    category = $(this).attr('data-category');
    //re-assigning OptionTag as a couple strings and a couple category ID's. We are giving it different content and value.
    optionTag = '<option value="' + category + '">' + category + '</option>';
    //an if statement: And it means that if the value of the statement equals 0, then append optionTag to #category-filter. We do not know what '.length' means in this context.
    if ($('#category-filter option[value="' + category + '"]').length === 0) {
      $('#category-filter').append(optionTag);
    }
  });
};

articleView.handleAuthorFilter = function () {
  $('#author-filter').on('change', function () {
    if ($(this).val()) {
      /* DONE: If the select box changes to an option that has a value, we should:
          1. Hide all of the articles
          2. Fade in only the articles that match based on on the author
            that was selected. Hint: use an attribute selector to find
            those articles that match the value, and then fade them in.
        */
      $('article').hide('slow');
      var authorName = $(this).val();
      $('article[data-author="' + authorName + '"]').fadeIn('slow');

    } else {
      /* Otherwise, we should:
          1. Show all the articles except the template */
      $('article').not('.template').show('slow');
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function () {
  /* DONE: Just like we do for #author-filter above, we should also handle
  change events on the #category-filter element. Be sure to reset the
  #author-filter while you're at it! */
  $('#category-filter').on('change', function () {
    if ($(this).val()) {
      $('article').hide('slow');
      var categoryName = $(this).val();
      $('article[data-category="' + categoryName + '"]').fadeIn('slow');

    } else {
      /* Otherwise, we should:
          1. Show all the articles except the template */
      $('article').not('.template').show('slow');
    }
    $('#author-filter').val('');
  });
};

articleView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function () {
    /* DONE:
      1. Hide all of the .tab-content sections
      2. Fade in the single .tab-content section that is
        associated with the .tab element's data-content attribute.
    */
    debugger;
    $('.tab-content').hide('fast');
    var clickedId = $(this).attr('data-content');
    $('#' + clickedId).fadeIn('slow');
  });
  $('.main-nav .tab:first').click();
};

articleView.setTeasers = function () {
  // Truncate logic to show only first two elements within the article body.
  $('.article-body *:nth-of-type(n+2)').hide();
  // DONE: Add a delegated event handler to reveal the remaining paragraphs.
  //   When a .read-on link is clicked, we can:
  $('.read-on').on('click', function () {
    // 1. Prevent the default action of a link.
    event.preventDefault();
    // 2. Reveal everything in that particular article now.
    $(this).siblings('.article-body').children().css('display','block');
    // 3. Hide that read-on link!
    $('.read-on').hide();

  });
    // STRETCH GOAl!: change the 'Read On' link to 'Show Less'
};

// DONE: Invoke all of the above functions (I mean, methods!):
articleView.populateFilters();
articleView.handleAuthorFilter();
articleView.handleCategoryFilter();
articleView.handleMainNav();
articleView.setTeasers();