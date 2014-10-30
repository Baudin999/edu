
window.pageKeys = {
    content: '.content',
    buttonTemplate: '<button type="button" class="show-output">Show</button>',
    prettyPrintClasses: 'prettyprint linenums lang-js'
};

function Page () {
    this.$container = $(pageKeys.content);
};
Page.getPage = function (url) {
    var page = new Page();
    page.$container.load( url, function() {
        page.$codeBlocks = CodeBlock.createFromContent( page );
        prettyPrint();
    });
};


function CodeBlock ( pre, page ) {
    this.$pre = pre;
    this.$pre.addClass( pageKeys.prettyPrintClasses );
    this.ignore = pre.hasClass( 'ignore' );
    this.page = page;
    this.output = [];
    
    if (!this.ignore) {
        this.codeResultButton = CodeResultButton.create( this );
    }
};
CodeBlock.prototype.evalResult = function () {
    var text = this.$pre.text();
    text = text.replace('console.log(', 'printOutput(');
    var result = eval(text);
    return result;
};
CodeBlock.prototype.addResult = function (value) {
    this.output.push(value);
};
CodeBlock.prototype.clearResult = function () {
    this.output = [];
};
CodeBlock.createFromContent = function ( page ) {
    // find all the code blocks on the page
    var codeBlocks = page.$container.find('pre');
    
    // return an Array of CodeBlocks
    return codeBlocks.map( function(index, $pre) {
        return new CodeBlock( $($pre), page );
    });
};


function CodeResultButton (button, codeBlock) {
    var self = this;
    
    if (!button) {
        button = $(pageKeys.buttonTemplate);
        button.insertBefore( codeBlock.$pre );
    }
    
    self.codeBlock = codeBlock;
    self.$button = button;
    self.$button.on('click', function ($event) {
        self.onClick( $event );
    });
};
CodeResultButton.prototype.onClick = function ($event) {
     this.codeBlock.$pre.text();
};
CodeResultButton.create = function (codeBlock) {
    // validate that we are not to ignore the code result
    if (codeBlock.$ignore) {
        throw new Error(
            'You cannot initialize a CodeResultButton \
            for a CodeBlock which is tagged as ignore.');
    }
    
    // insert the show button into the dom per $pre
    button = $(pageKeys.buttonTemplate);
    button.insertBefore( codeBlock.$pre );
    
    var codeResultButton = new CodeResultButton( button, codeBlock );
    return codeResultButton;
};





