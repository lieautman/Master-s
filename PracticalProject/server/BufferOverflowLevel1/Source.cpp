#include <stdio.h>
#include <string.h>

int main(int argc, char** argv) {
	char input[10];
	int isAdmin = 0;

	strcpy(input, argv[1]);
	printf("isAdmin:%d\n", isAdmin);

	if (isAdmin) {
        printf("Hello admin!\n");
		return 1;
	}
	else {
        printf("Hello %s!\n", input);
		return 0;
	}
}
