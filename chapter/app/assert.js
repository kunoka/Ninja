/**
 * Created by gary on 6/13/16.
 */

function assert(value, desc){

    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
}