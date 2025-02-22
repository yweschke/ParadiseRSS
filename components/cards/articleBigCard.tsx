import { View, Text, Image, TouchableOpacity } from "react-native";
import { Article } from "@/types/rssFeed/article.ts";

export default function ArticleBigCard({ article}: { article: Article; onPress: () => void }) {
    return (
        <TouchableOpacity className="bg-gray-700 m-2 rounded-2xl shadow-md w-100">
            {/* Article Content */}
            <View className="p-3">
                <Image
                    className="w-full h-40 rounded-lg"
                    source={{uri: article.image?.url}}
                />
                <Text className="text-white font-bold text-lg" numberOfLines={2}>{article.title}</Text>
                <Text className="text-white opacity-80" numberOfLines={3}>{article.description}</Text>
            </View>
        </TouchableOpacity>
    );
}
