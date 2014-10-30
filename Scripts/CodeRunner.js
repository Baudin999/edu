$(function() {
            "use strict";
            
            var _output = [],
                pages = [
                    '/pages/01_introduction.html',
                    '/pages/02_FunctionalProgramming.html',
                    '/pages/03_DeclarativeProgramming.html',
                    '/pages/07_Arrays.html',
                    '/pages/04_ObjectOrientedProgramming.html',
                    '/pages/05_Closures.html',
                    '/pages/06_Logger.html',
                    '/pages/08_AngularJS.html'
                ],
                currentPage = localStorage.getItem('currentPage') || 0,
                presentationMode = false,
                currentCodeExample = 0;
            
            var showContent = (function () {
                
                return function (url) {
                    $('.content').load(url, function() {
                        var btnShowContent = 
                            '<button type="button" class="show-output">Show</button>';
                        $('pre').each(function (index, pre) {
                            if (!$(pre).hasClass('prettyprint')) {
                                var $pre = $(pre);
                                $pre.addClass('prettyprint linenums lang-js')
                                if (!$pre.hasClass( 'ignore' )) {
                                    $(btnShowContent).insertBefore($pre);
                                }
                            }
                        });

                        prettyPrint();
                        
                        // toggle presentation mode
                        if (presentationMode) {
                            togglePresentationMode();
                        }
                    });
                    
                    //Page.getPage( url );
                };
            }());
            
            window.showPageByUrl = showContent;
    
            var nextPage = function () {
                if (currentPage === pages.length - 1) return;
                currentPage++;
                localStorage.setItem('currentPage', currentPage);
                currentCodeExample = 0;
                showContent( pages[currentPage] );
            };

            var previousPage = function () {
                if (currentPage === 0) return;
                currentPage--;
                localStorage.setItem('currentPage', currentPage);
                currentCodeExample = 0;
                showContent( pages[currentPage] );
            };
            showContent(pages[currentPage]);
            $('.next-page').on('click', nextPage);
            $('.previous-page').on('click', previousPage);
    
            
            var showOutput = (function () {
                var output = $('.output');
                
                return function () {
                    var text, result, 
                        args = Array.prototype.slice.call(arguments, 0);
                    
                    if(output.hasClass('show')) {
                        output.removeClass('show');
                        _output = [];
                    }
                    else {
                        text = $($(args[0].currentTarget).next()).text();
                        text = text.replace(/console.log\(/g,'printOutput(');
                        result = eval(text);
                        $('.message').html( _output.join(' <br /> ') );
                        output.addClass('show');
                    }
                };
            }());
            
            var printOutput = function (value) {
                _output.push( value );
            };
            
            $(document).on('click', '.output', showOutput);
            $(document).on('click', '.show-output', showOutput);
            
            var showCurrentPre = function (index) {
                $('h2, p, pre, .show-output').hide();
                var $pre = $($('pre')[index]);
                $pre.fadeIn();
                if (!$pre.hasClass('ignore')) {
                    $pre.prev().fadeIn();
                }
                
                $('.previous-pre').prop('disabled', (index === 0));
                $('.next-pre').prop('disabled', (index === $('pre').length - 1));
            };
    
            var togglePresentationMode = function () {
                var selector = 'h2, p, pre, .show-output';
                if (!presentationMode) {
                    $(selector).fadeIn('fast');
                }
                else {
                    $(selector).fadeOut('fast');
                    showCurrentPre(currentCodeExample);
                }
            };
            
            $('.presentation-mode-toggle').on('click', function ($event) {
                presentationMode = !presentationMode;
                togglePresentationMode();
            });
            
            $('.next-pre').on('click', function () {
                currentCodeExample++;
                showCurrentPre(currentCodeExample);
            });
            
            $('.previous-pre').on('click', function () {
                currentCodeExample--;
                showCurrentPre(currentCodeExample);
            });
        });