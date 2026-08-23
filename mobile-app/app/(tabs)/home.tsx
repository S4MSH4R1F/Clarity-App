// Home screen full build. 
// All data below is MOCK data from lib/mockData.ts. 
// Automatic news feature and live Supabase data are NOT wired up yet. 

import { View, Text, ScrollView, TextInput } from "react-native"; 
import Header from "../../components/Header"; 
import MPPCard from "../../components/MPPCard"; 
import BillCard from "../../components/BillCard"; 
import NewsCard from "../../components/NewsCard"; 
import { mockMPP, mockBills, mockArticles, mockRecentVote, } from "../../lib/mockData"; 

export default function Home() { 
  return ( 
  <ScrollView className="flex-1 bg-white"> 
    <Header title="Home" /> 
    <View className="p-4"> 
      {/* Search bar — UI only, no search logic wired up yet */} 
      <TextInput placeholder="Search bills, MPPs, topics" className="bg-cardbg rounded-pill px-4 py-3 mb-4" />
      
       {/* Your MPP card — MOCK data */} 
       <Text className="text-lg font-bold mb-2">Your MPP</Text> 
       <MPPCard {...mockMPP} /> 
       
       {/* Top bills this week — MOCK data, horizontal scroll */} 
       <Text className="text-lg font-bold mt-6 mb-2">Top Bills This Week</Text> 
       <ScrollView horizontal showsHorizontalScrollIndicator={false}> 
        {mockBills.map((bill) => ( <BillCard key={bill.id} {...bill} />
        ))} 
        </ScrollView> 
        
        {/* News & Bills section — MOCK data, labeled per project notes since live news isn't wired up */} 
        <Text className="text-lg font-bold mt-6 mb-2">News & Bills</Text> 
        {mockArticles.map((article) => ( 
          <NewsCard key={article.id} {...article} /> 
        ))} 
        
        {/* Recent vote from your MPP — MOCK data */} 
        <Text className="text-lg font-bold mt-6 mb-2">Recent Vote From Your MPP</Text> 
        <View className="bg-cardbg rounded-card p-4 border border-border"> 
          <Text className="font-bold">{mockRecentVote.billNumber}</Text> 
          <Text numberOfLines={2}>{mockRecentVote.title}</Text> 
          <Text className="text-primary font-semibold mt-1">{mockRecentVote.vote}</Text> 
        </View> 
      </View> 
    </ScrollView> 
  ); 
} 
