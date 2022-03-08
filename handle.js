module.exports = (request , response) => { // exportar  o modulo externo
    
    let html = `
            <!DOCTYPE "html">
            <html>
                <head>
                    <title>App com Http e Nodejs</title>
                </head>
                <body>
                    <h1>Bem vindo ao modulo Http</h1>
                </body>
            </html>
            
            `;

    response.writeHead(200, { "Content-Type" : "text/html; chatset=utf-8" });
    response.write(html);
    response.end();
}



