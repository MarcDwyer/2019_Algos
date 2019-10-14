package main

import (
	"fmt"
	"sort"
)

func main() {
	arr := []int{6, 4, 3, 1, 12, 13}
	fmt.Println(arr)
	sort.Slice(arr, func(i, j int) bool {
		return arr[i] < arr[j]
	})
	fmt.Println(arr)
}
