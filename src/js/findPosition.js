export default function(element) {
    var top = 0
    do {
        top += element.offsetTop  || 0;
        element = element.offsetParent;
    } while(element);

    return {
        top
    };
};
