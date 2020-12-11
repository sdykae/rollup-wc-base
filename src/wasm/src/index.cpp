// #include <stdio.h>
// int main() {
//   FILE *file = fopen("tests/hello_world_file.txt", "rb");
//   if (!file) {
//     printf("cannot open filexddd\n");
//     return 1;
//   }
//   while (!feof(file)) {
//     char c = fgetc(file);
//     if (c != EOF) {
//       putchar(c);
//     }
//   }
//   fclose (file);
//   return 0;
// }

// #include <emscripten/bind.h>

// using namespace emscripten;

// float lerp(float a, float b, float t) {
//     return (1 - t) * a + t * b;
// }

// EMSCRIPTEN_BINDINGS(my_module) {
//     function("lerp", &lerp);
// }

// #include <cheerp/clientlib.h>

// [[cheerp::genericjs]] int domOutput(const char* str)
// {
//     client::String* s = new client::String(str);
//     client::console.log(s);
//     // Also add it to the DOM for good measure
//     client::document.get_body()->set_textContent(s);
//     return s->get_length();
// }

// void webMain()
// {
//     int len = domOutput("Hello WASM!");
//     assert(len == 11);
// }



#include <cheerp/clientlib.h>
#include <cheerp/client.h>

[[cheerp::genericjs]] void domOutput(const char* str)
{
    	client::console.log(str);
}

void webMain()
{
    	domOutput("Hello World");
}