var aTags = document.getElementsByTagName("a");
var citeTags = document.getElementsByTagName("cite");
var x;
var failedAttempts = 0;
var bridgeLogout = "samlLogout.jsp" || "P_Logout";
make(aTags, citeTags)

var bridgeLink = "https://login.microsoftonline.com/8cd360c2-068b-4e36-8db5-27b35792f53f/saml2?SAMLRequest=jZLBToQwEIbvPgXpHShlYdlmwawao4nGjaAHb6UM0Ajt2ikbH1%2FcdaNejMcm83%2Fzp9%2Bsz9%2FHwduDRWV0TqKAEg%2B0NI3SXU6eqms%2FI%2BfF2RrFOLAd30yu14%2FwNgE6b4MI1s25S6NxGsGWYPdKwtPjXU5653bIw7C2qulgUPo1mAZwfSBFiGhGoUUHNvzkhmX5QLyrGam0cIcep%2FRgOqWDUUlr0LTO6BkEgTRjmMkmTqlkPk2z2l9AnPpZUyc%2BW9ZxslyxNonbA50R79pYCYfqOWnFgEC826uciEUtum6VRFFEl0zUcR81WZrQqGm7tF%2FNQ7gViGoP3zHECW41OqFdThhlsR9FPl1WNOaUcbYIsjR7Id7WGmekGS6UPv7kZDU3AhVyLUZA7iQvN%2Fd3nAWU18ch5DdVtfW3D2VFvOeTEfZpZHakkR8d%2FM3afS0mxVEZPzS2Pwl%2FA8RJKin%2Bp3Ad%2FlxUfD1%2Fn0rxAQ%3D%3D&RelayState=%2Fc%2Fauth%2FSSB&SigAlg=http%3A%2F%2Fwww.w3.org%2F2000%2F09%2Fxmldsig%23rsa-sha1&Signature=gyWWRbfTb%2BMZmebmJwypzEr5ecn0YpzJE1uOBdphFciUZUfruXcSSGCcoBwJQcRUX6WriVRyopiuv7xwkHu7Zk8qgRWSd%2B7axq33nTlNySEncsyVdG3RtbRrKcB4TQPvmjXBrX%2BtZ1t9GlqLdGNkqu40vYmF0rWyHVAHSW8LJTeUl9aEVDjBJPTawut0WTKLBEJ%2BBitmRzpRY7U8TR7Qdct%2FmQtEGpVc0rJXdTTq%2BJIHowtksSEtzPC8S%2FpL29idBnilX2iE7k9WcKAfmARTPytXoGIkqatIvO9uR1QWkTRMp7R583N32wQT3KdrNex%2Fg31kvm1nJed38XtRP%2FyjjQ%3D%3D"
var hillmediaLink = "https://www.hillmedia.ca"


function make(aTags, citeTags) {
    for(let x of aTags) {


        //Looking for <a> tags with href attributes
        if (x.getAttribute("href") !== null) {
            x_edit = x.getAttribute("href")
            x_edit = x_edit.split('/')
            // console.log(x_edit)
            // console.log(x_edit.includes(bridgeLogout))

            if (x_edit.includes(bridgeLogout)){
                console.log("Logout detected.")
                console.log("x: " + x)
                x.setAttribute("href", "https://login.microsoftonline.com/8cd360c2-068b-4e36-8db5-27b35792f53f/saml2?SAMLRequest=jZLBToQwEIbvPgXpHShlYdlmwawao4nGjaAHb6UM0Ajt2ikbH1%2FcdaNejMcm83%2Fzp9%2Bsz9%2FHwduDRWV0TqKAEg%2B0NI3SXU6eqms%2FI%2BfF2RrFOLAd30yu14%2FwNgE6b4MI1s25S6NxGsGWYPdKwtPjXU5653bIw7C2qulgUPo1mAZwfSBFiGhGoUUHNvzkhmX5QLyrGam0cIcep%2FRgOqWDUUlr0LTO6BkEgTRjmMkmTqlkPk2z2l9AnPpZUyc%2BW9ZxslyxNonbA50R79pYCYfqOWnFgEC826uciEUtum6VRFFEl0zUcR81WZrQqGm7tF%2FNQ7gViGoP3zHECW41OqFdThhlsR9FPl1WNOaUcbYIsjR7Id7WGmekGS6UPv7kZDU3AhVyLUZA7iQvN%2Fd3nAWU18ch5DdVtfW3D2VFvOeTEfZpZHakkR8d%2FM3afS0mxVEZPzS2Pwl%2FA8RJKin%2Bp3Ad%2FlxUfD1%2Fn0rxAQ%3D%3D&RelayState=%2Fc%2Fauth%2FSSB&SigAlg=http%3A%2F%2Fwww.w3.org%2F2000%2F09%2Fxmldsig%23rsa-sha1&Signature=gyWWRbfTb%2BMZmebmJwypzEr5ecn0YpzJE1uOBdphFciUZUfruXcSSGCcoBwJQcRUX6WriVRyopiuv7xwkHu7Zk8qgRWSd%2B7axq33nTlNySEncsyVdG3RtbRrKcB4TQPvmjXBrX%2BtZ1t9GlqLdGNkqu40vYmF0rWyHVAHSW8LJTeUl9aEVDjBJPTawut0WTKLBEJ%2BBitmRzpRY7U8TR7Qdct%2FmQtEGpVc0rJXdTTq%2BJIHowtksSEtzPC8S%2FpL29idBnilX2iE7k9WcKAfmARTPytXoGIkqatIvO9uR1QWkTRMp7R583N32wQT3KdrNex%2Fg31kvm1nJed38XtRP%2FyjjQ%3D%3D")
                
                
                document.getElementsByTagName("cite")[0].innerHTML = "https://bridge.uleth.ca/selfservice/twbkwbis.P_GenMenu?name=bmenu.P_MainMnu";
                text.innerText = "https://bridge.uleth.ca/selfservice/twbkwbis.P_GenMenu?name=bmenu.P_MainMnu";
               

                
            } else {
                failedAttempts++;
            
            }
        }

        if (x.innerHTML.includes(bridgeLogout)) {
            console.log("contains logout, but innerHTML")
            x_cite = x.getElementsByTagName("cite")[0]
            console.log(x_cite)
            x_cite.innerText = "https://bridge.uleth.ca/selfservice/twbkwbis.P_GenMenu?name=bmenu.P_MainMnu";
            console.log(x_cite.innerText)

        } else {failedAttempts++}



    //     if (citeTags[x] !== undefined) {
            
    //         console.log("yay" + citeTags[x]) 
    //     } else {
    //         console.log("hmm")}

    // }
}
}
