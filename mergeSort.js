const array = [25, 69, 28, 10, 1, 1, 1, 32, 100, -300];

const mergeSort = (array) => {
  /*
  1. if length of array is 1, return array
  2. else subdivide into leftArray and right array
  3. for both left and right, call mergeSort
  4. to merge initialize pointers on left and right (idxL and idxR)
  5. make a temporary array with index name m
  6. compare left and right on same index, store smaller value
  7. move to next pointers until one of left or right is empty
  8. leftovers from left and right will be added into the array
  9. temporary array is returned
  */

  //base condition
  if (array.length <= 1) return array;

  // recursive behavior
  const mid = Math.floor(array.length / 2);
  const leftArray = mergeSort(array.slice(0, mid));
  const rightArray = mergeSort(array.slice(mid));
  console.log("left array: ", leftArray, "right array: ", rightArray);

  let [idxL, idxR, m] = [0, 0, 0];
  const tmp = [];
  while (idxL < leftArray.length && idxR < rightArray.length) {
    if (leftArray[idxL] <= rightArray[idxR]) {
      tmp[m] = leftArray[idxL];
      idxL += 1;
    } else {
      tmp[m] = rightArray[idxR];
      idxR += 1;
    }
    console.log("stored ", tmp[m]);
    // update idx of storage array
    m += 1;
  }
  console.log("while loop exited");
  console.log("idxL: ", idxL, "idxR: ", idxR);

  // check for left out elements of left and right and add them too :(
  console.log("left remainder", leftArray.slice(idxL));
  console.log("right remainder ", rightArray.slice(idxR));
  console.log("array : ", tmp);

  if (idxL < leftArray.length) {
    console.log("appending leftoverL: ", leftArray.slice(idxL));
    tmp = tmp.concat(leftArray.slice(idxL));
  }

  if (idxR < rightArray.length) {
    console.log("appending leftoverR :", rightArray.slice(idxR));
    tmp = tmp.concat(rightArray.slice(idxR));
  }

  console.log("returning: ", tmp);
  return tmp;
};

console.log(mergeSort(array));
