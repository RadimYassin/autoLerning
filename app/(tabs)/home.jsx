import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, RefreshControl, ScrollView, Text, View } from "react-native";

import { images } from "../../constants";
// import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import { EmptyState, SearchInput, Trending, VideoCard } from "../../components";
import CardNews from "../../components/CardNews";
import { Link } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import CardInfoScreen from "../../components/CardInfoScreen";

const Home = () => {
  //   const { data: posts, refetch } = useAppwrite(getAllPosts);
  //   const { data: latestPosts } = useAppwrite(getLatestPosts);

  // const [refreshing, setRefreshing] = useState(false);

  // const onRefresh = async () => {
  //   setRefreshing(true);
  //   await refetch();
  //   setRefreshing(false);
  // };

  // one flatlist
  // with list header
  // and horizontal flatlist

  //  we cannot do that with just scrollview as there's both horizontal and vertical scroll (two flat lists, within trending)

  return (
    <SafeAreaView className="flex-1">
      <View className="flex justify-between items-start flex-row mb-6">
          <View>
            <Text className="font-pmedium text-sm text-black">
              Welcome Back
            </Text>
            <Text className="text-2xl font-psemibold text-black">
              radim yassine
            </Text>
          </View>

          <View className="mt-1.5">
            {/* <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                /> */}
          </View>
        </View>

    <ScrollView>
    <View className="flex my-6 px-4 space-y-6">
      
        <SearchInput />
      </View>

      <View className="flex mx-6 ">
        <CardNews />
      </View>
      <View className="m-6">
  <View className="flex flex-row justify-between items-center">
    <Text className="font-pmedium bg text-lg text-black w-1/2">Popular Courses</Text>
    <View className="flex flex-row items-center">
      <Link className="w-auto" href="/index">
        <Text className="text-base" style={{ color: "#0961F5" }}>See all</Text>
      </Link>
      <AntDesign name="right" size={24} color="#0961F5" />
    </View>

    
  </View>
  <CardInfoScreen></CardInfoScreen>
  <CardInfoScreen></CardInfoScreen>
  <CardInfoScreen></CardInfoScreen>
  <CardInfoScreen></CardInfoScreen>

 </View>
    </ScrollView>
   

    </SafeAreaView>
  );
};

export default Home;
