var lls = [
'(defrule RR (a b) => (assert (l p)))',
'(assert (a b))',
'(run)',
'(facts)',
'(exit)'
];
var llsl = lls.length;
var llsi = 0;

Module = {}

Module.preInit = function () {

    input = function () {
        if (!input.cache || !input.cache.length) {
            var result;
            /*if (typeof window != 'undefined' &&
                typeof window.prompt == 'function') {
                result = window.prompt('Input: ');
                if (result === null) result = String.fromCharCode(0);
            } else if (typeof readline == 'function') {
                result = readline();
            }*/

            result = lls[llsi++];

            if (!result) result = '';
            input.cache = intArrayFromString(result + '\n', true);
        }
        return input.cache.shift();
    };

    FS.init(input)
}

function regueco(bis) {
    llsi = 0;
    lls = bis;
    try{
    ccall('guecomain', 'number', ['number', 'number'], [0, 0]);
    }catch(e){}
}
