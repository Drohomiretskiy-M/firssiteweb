var p = document.getElementById("blinking");
            setInterval(function() {
                if (p.style.fontSize != "10px") {
                    p.style.fontSize = "10px";
                } else {
                    p.style.fontSize = "60px";
                }
            }, 1000);