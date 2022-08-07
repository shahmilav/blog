---
title: "Learning Rust"
tagged: ["dev", "rust"]
date: 2022-07-11 23:00:00.10
---

Rust is hard. Currently working on a simple CLI hangman game with it. I feel like Java is so much easier, but Rust is
more fun. Still can't understand `for` loops.

I have no idea why this fails. I'm sure it is obvious.

```rust
fn choose_lang(languages: HashMap<String, String>) -> String {
    let mut rng = rand::thread_rng();
    let random_num = rng.gen_range(0..NUM_OF_LANGS);

    let mut counter = 0;
    for (key, value) in &languages {
        if random_num == counter {
            return key.to_string();
        }
        counter += 1;
    }
    panic!("Language failed to be chosen.");
}
```

And the annoying error...

```text
thread 'main' panicked at 'Language failed to be chosen.', src/main.rs:42:5
stack backtrace:
   0: rust_begin_unwind
             at /rustc/fe5b13d681f25ee6474be29d748c65adcd91f69e/library/std/src/panicking.rs:584:5
   1: core::panicking::panic_fmt
             at /rustc/fe5b13d681f25ee6474be29d748c65adcd91f69e/library/core/src/panicking.rs:143:14
   2: hangman::choose_lang
             at ./src/main.rs:42:5
   3: hangman::main
             at ./src/main.rs:11:16
   4: core::ops::function::FnOnce::call_once
             at /rustc/fe5b13d681f25ee6474be29d748c65adcd91f69e/library/core/src/ops/function.rs:227:5
note: Some details are omitted, run with `RUST_BACKTRACE=full` for a verbose backtrace.

Process finished with exit code 101
```
