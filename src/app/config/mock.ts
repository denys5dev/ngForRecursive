export let treeView = [
  {
    id: 1,
    parentId: null,
    isSelected: false,
    children: [
      {
        id: 2,
        parentId: 1,
        children: [],
        isSelected: false
      },
      {
        id: 3,
        parentId: 1,
        isSelected: false,
        children: [
          {
            id: 4,
            parentId: 3,
            isSelected: false,
            children: []
          }
        ]
      },
      {
        id: 5,
        parentId: 1,
        isSelected: false,
        children: []
      },
      {
        id: 6,
        parentId: null,
        isSelected: false,
        children: []
      }
    ]
  },
  {
    id: 10,
    parentId: null,
    isSelected: false,
    children: []
  },
  {
    id: 11,
    parentId: null,
    isSelected: false,
    children: []
  },
];
