const output = document.querySelector("p");
      const button = document.querySelector("button");
      const input = document.querySelector("input");
      const div = document.querySelector('div');

      let total = 0;
      function permute(idx, str) {
        if (idx == str.length - 1) {
          output.innerHTML = output.innerHTML + str + "<br>";
          total++;
          return;
        }

        let prev = "*";
        for (let j = idx; j < str.length; j++) {
          let temp = str.split("");
          if (j > idx && temp[idx] == temp[j]) continue;
          if (prev != "*" && prev == str[j]) {
            continue;
          }

          temp = swap(temp, idx, j);
          prev = str[j];

          permute(idx + 1, temp.join(""));
        }
      }

      function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        return arr;
      }

      function sortString(inputString) {
        let tempArray = inputString.split("");
        tempArray.sort();
        return tempArray.join("");
      }

      button.addEventListener("click", function () {
        if(input.value =='') return;
        output.innerHTML = ""; //clear p tag
        total = 0; // clear count
        let str = input.value;
        str = sortString(str);
        permute(0, str);
        div.style.display = 'block'
        output.innerHTML =
          output.innerHTML + "Total distinct permutations = " + total + "<br>";
      });