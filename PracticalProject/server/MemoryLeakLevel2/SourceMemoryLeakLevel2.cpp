#include <stdio.h>
#include <stdlib.h>

int main(int argc, char** argv) {
	for (int i = 0; i < 2147483646; i++) {
		int* ptr = (int*)malloc(sizeof(int));
		free(ptr);
	}
	printf("Finished process!");
	return 1;
}
