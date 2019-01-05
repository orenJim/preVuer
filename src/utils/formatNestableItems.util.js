// const formatNestableItems = (components) => {
//   // create Nestable Items, store in cache: key = componentId
//   const cache = components.reduce((obj, component) => {
//     obj[component.id] = {
//       "id": component.id,
//       "text": component.title,
//       "children": component.childrenIds
//     }
//     return obj;
//   },{})
//   // creates array of Nestable Items, 'children' property populated by checking
//   const children = new Set();
//   const rawNestedComponents = components.map(component => {
//     return ({ 
//       "id": component.id,
//       "text": component.title,
//       "children": component.childrenIds.map(childId => {
//         children.add(childId);
//         return cache[childId];
//       })
//     })
//   })
//   const filteredComponents = rawNestedComponents.filter(component => {
//     return !children.has(component.id)
//   });
//   console.log(filteredComponents)
//   return filteredComponents;
// }

// export default formatNestableItems;

const desiredOutput = [
  { 
    'id': '1', 'text': 'App', 'children': [
      { 
        'id': '2', 'text': 'LeftContainer', 'children': [
          { 
            'id': '5', 'text': 'ComponentList', 'children': []
          },
          { 
            'id': '6', 'text': 'ComponentListItem', 'children': []
          }
        ]
      },
      { 
        'id': '3', 'text': 'CenterContainer', 'children': [
          { 
            'id': '7', 'text': 'TopBar', 'children': []
          },
          { 
            'id': '8', 'text': 'CenterCanval', 'children': []
          }
        ]
      },
      { 
        'id': '4', 'text': 'RightContainer', 'children': [
          { 
            'id': '9', 'text': 'TreeView', 'children': []
          }
        ]
      }
    ]
  }
]