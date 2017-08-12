package main

import "fmt"


func main() {

    channel := make(chan string, 4);
    channel <- "ESPN";
    channel <- "BBC";
    channel <- "Bloomberg";
    channel <- "Scifi";

    close(channel);


    for option := range channel {
       fmt.Println(option)
    }
}
