// Write a generic interface DataHolder that represents an object holding a single piece of data. The DataHolder interface should have a single property data of a generic type T.

interface DataHolder<T> {
  data: T;
}

// Then, create an instance of DataHolder where T is a boolean and another instance where T is a string.

const tString: DataHolder<string> = {
  data: 'howdy'
};

const bstring: DataHolder<boolean> = {
  data: false
};
