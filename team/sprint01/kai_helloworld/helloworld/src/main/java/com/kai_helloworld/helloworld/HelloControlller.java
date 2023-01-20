package com.kai_helloworld.helloworld;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloControlller {
    
    @RequestMapping("/")
    public String button(){
        return """
                <!DOCTYPE html>
                <html>
                <body>

                <h1>Main Page</h1>
                <p> Click Below to go to Hello World Page </p>

                <style>
                    .block {
                        display: block;
                        border: none;
                        background-color: #000000;
                        color: white;
                        padding: 14px 28px;
                        font-size: 16px;
                        cursor: pointer;
                        text-align: center;
                    }
                </style>

                <a href=\"kai_helloworld\">
                <button class=\"block\"><b>Hello World</b></button>
                </a>

                </body>
                </html>
                """;
    }


    @RequestMapping("/kai_helloworld")
    public String helloWorld(){
        return """
                <!DOCTYPE html>
                <html>
                <body>

                <h1>Hello World</h1>
                <p>This is a dummy demo of the buddyup(TM) housemate finder and landlord rating application!</p>

                </body>
                </html>
                """;
    }
}
