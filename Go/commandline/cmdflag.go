package main

import (
    f "fmt"
    "flag"
)

func main () {

    var gopherName string;
    flag.StringVar(&gopherName, "gophername", "Ali", "The name of the Gopher");
    flag.Parse();
    f.Printf("Hello %s !", gopherName);

}
