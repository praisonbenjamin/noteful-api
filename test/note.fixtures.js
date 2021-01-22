function makeNoteArray() {
  return [
    {
      id: 1,
      note_name: 'One',
      content: 'Contents for note 1',
      date_modified: '2021-01-14T15:52:55.175Z',
      assigned_folder: 1
    },
    {
      id: 2,
      note_name: 'Two',
      content: 'Contents for note 2',
      date_modified: '2021-01-14T15:52:55.175Z',
      assigned_folder: 2
    },
    {
      id: 3,
      note_name: 'Three',
      content: 'Contents for note 3',
      date_modified: '2020-01-14T15:52:55.175Z',
      assigned_folder: 2
    },
    {
      id: 4,
      note_name: 'Four',
      content: 'Contents for note 4',
      date_modified: '2021-01-14T15:52:55.175Z',
      assigned_folder: 3
    }
  ];
}

module.exports = {
  makeNoteArray
};