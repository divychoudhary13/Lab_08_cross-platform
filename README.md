# React Native Navigation Lab

## Key Features
- Bottom Tab Navigator with three tabs: **Home**, **Search**, **Settings**
- **Stack Navigator** nested inside the Home tab
- Multi-screen flow: Home → Details → Profile
- Dynamic header title in Details screen using `route.params`
- Ionicons used for tab icons with active/inactive tint colors
- Consistent header styling (blue background, white bold text)

## Learning Components
- Setting up both **TabNavigator** and **StackNavigator** together
- Understanding how nested navigation works in React Navigation
- Passing parameters between screens using `navigation.navigate()`
- Accessing data inside screens using `route.params`
- Fixing missing icon issues by correctly importing `react-native-vector-icons/Ionicons`
- Applying `screenOptions` to control tab icons and header styling
- Debugging navigation flow and verifying transitions between screens


# Navigation Structure 
```
NavigationContainer
│
└── TabNavigator
    │
    ├── HomeTab
    │     └── StackNavigator
    │          ├── HomeScreen
    │          ├── DetailsScreen
    │          └── ProfileScreen
    │
    ├── SearchTab
    │     └── SearchScreen
    │
    └── SettingsTab
          └── SettingsScreen
```