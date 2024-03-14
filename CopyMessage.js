window.onload=function(){
    const Style = 
    `
    <style>
    @keyframes FadeOutCss{
        0%{opacity: 0;}
        100%{opacity: 1;}
    }
    @keyframes FadeInCss{
        0%{opacity: 1;display:block;}
        100%{opacity: 0;display:block;}
    }
    </style>
    `;
    const messageStyle = 
    `
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: fixed;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 20px ;
    z-index:10001;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.45);
    pointer-events: none;
    animation: FadeOutCss .2s ease-in-out;
    backdrop-filter: blur(5px);
    `;
    const messageTextStyle = 
    `
    overflow: hidden;
    margin:0;
    padding:0;
    text-align: center;
    font-size: 17px;
    font-optical-sizing: auto;
    font-style: normal;
    font-family: Arial, sans-serif;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.75);
    text-overflow: ellipsis;
    text-wrap: nowrap;
    user-select: none;
    `;

    document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", Style);

    document.addEventListener('copy', function(e) {
        let selectedText = window.getSelection().toString();
        if (selectedText.length > 0) {
            console.log(selectedText);

            let messageHTML = 
            `
            <div class="CopyJsMessage" style="${messageStyle}">
                <p style="${messageTextStyle}">コピーしました！</p>
            </div>
            `;

            if(document.getElementsByClassName("CopyJsMessage").length <= 0){
                document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", messageHTML);

                setTimeout(() => {
                    document.getElementsByClassName("CopyJsMessage")[0].style=`${messageStyle}animation: FadeInCss .2s ease-in-out;display:none;`;
                    setTimeout(() => {
                        document.getElementsByClassName("CopyJsMessage")[0].remove();
                    }, 200);
                }, 5000);
            }else{
                document.getElementsByClassName("CopyJsMessage")[0].remove();
                document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", messageHTML);
            }

        }
    });
}