package com.kai_helloworld.helloworld;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloControlller {
    
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
