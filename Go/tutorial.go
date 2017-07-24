package main

import (

	// "strings"
	// "sort"
	// "os"
	// "log"
	// "io/ioutil"
	// "strconv"
	"fmt"
	"strconv"
	"time"

)

var pizzaNum int = 0
var pizzaName string = ""

func main() {

	stringChan := make(chan string)

	for i := 1; i <= 3; i++ {

		go makeDough(stringChan)
		go addSauce(stringChan)
		go addToppings(stringChan)

	}

		time.Sleep(time.Second * 5)
}

func makeDough(stringChan chan string) {
	pizzaNum++

	pizzaName = "Pizza #" + strconv.Itoa(pizzaNum)

	fmt.Println(pizzaName, "is made and now ready for sauce")

	stringChan <- pizzaName

	time.Sleep(time.Millisecond * 10)
}

func addSauce(stringChan chan string) {
	pizzaName := <-stringChan

	fmt.Println("Added Sauce to pizza now sending to toppings station")

	stringChan <- pizzaName

	time.Sleep(time.Millisecond * 10)
}

func addToppings(stringChan chan string) {
	pizzaName := <-stringChan

	fmt.Println("Added toppings to pizza now bringing pizza to table")

	stringChan <- pizzaName

	time.Sleep(time.Millisecond * 10)
}
