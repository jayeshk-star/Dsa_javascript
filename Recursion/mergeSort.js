function merge(arr, l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;
  
    var L = new Array(n1);
    var R = new Array(n2);
  //   console.log(L)
  
    for (var i = 0; i < n1; i++) L[i] = arr[l + i];
    for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
  
    var i = 0;
  
    var j = 0;
  
    var k = l;
  
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
    }
  
    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }
  
    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }
  }
  
  function mergeSort(arr, l, r) {
    if (l >= r) {
      return; //
    }
    var m = l + Math.floor((r - l) / 2);
    console.log(m)
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
  }
  
  
  function printArray(A, size) {
    for (var i = 0; i < size; i++) console.log(A[i] + " ");
  }
  
  var arr = [12, 11, 13, 5, 6, 7];
  var arr_size = arr.length;
  
  // printArray(arr, arr_size);
  
  mergeSort(arr, 0, arr_size - 1)
  printArray(arr, arr_size);
  