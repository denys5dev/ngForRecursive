export let treeView = [
  {
    id: 1,
    parentId: null,
    isSelected: false,
    title: 'parent',
    children: [
      {
        id: 2,
        parentId: 1,
        children: [],
        title: 'child',
        isSelected: false
      },
      {
        id: 3,
        parentId: 1,
        isSelected: false,
        title: 'child',
        children: [
          {
            id: 4,
            parentId: 3,
            isSelected: false,
            title: 'grand-child',
            children: []
          }
        ]
      },
      {
        id: 5,
        parentId: 1,
        isSelected: false,
        title: 'child',
        children: []
      },
      {
        id: 6,
        parentId: null,
        isSelected: false,
        title: 'child',
        children: []
      }
    ]
  },
  {
    id: 10,
    parentId: null,
    isSelected: false,
    title: 'parent',
    children: []
  },
  {
    id: 11,
    parentId: null,
    isSelected: false,
    title: 'parent',
    children: []
  },
];
