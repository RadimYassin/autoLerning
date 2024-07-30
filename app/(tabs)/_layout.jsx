import { StatusBar } from "expo-status-bar";
import { Redirect, Tabs } from "expo-router";
import { Image, Text, View } from "react-native";

import { icons } from "../../constants";
import { Loader } from "../../components";
import { useGlobalContext } from "../../context/GlobalProvider";

const TabIcon = ({ icon, color, name, focused,style }) => {
  return (
    <View className="flex items-center justify-center gap-2 ">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className={style}
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && !isLogged) return <Redirect href="/sign-in" />;

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#167F71",
          tabBarInactiveTintColor: "#393B5B",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#E2E6EA",
            borderTopWidth: 1,
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                style={"w-6 h-6"}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="cours"
          options={{
            title: "cours",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.heart}
                color={color}
                name="cours"
                style={"w-6 h-6"}

                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="test"
          options={{
            title: "test",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.drivingSchool}
                color={color}
                name="test"
                style={"w-9 h-9"}

                focused={focused}
              />
            ),
          }}
        />
         <Tabs.Screen
          name="inbox"
          options={{
            title: "inbox",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bubbleChat}
                color={color}
                name="inbox"
                style={"w-6 h-6"}

                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                style={"w-6 h-6"}

                focused={focused}
              />
            ),
          }}
        />
      </Tabs>

      {/* <Loader isLoading={loading} /> */}
      <StatusBar style="dark" />
    </>
  );
};

export default TabLayout;
