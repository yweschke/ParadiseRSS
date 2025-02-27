import { View, Text, Image, TouchableOpacity } from "react-native";
import { Article } from "@/types/rssFeed/article.ts";

export default function ArticleCard({ article, onPress }: { article: Article; onPress: () => void }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="bg-primary-light dark:bg-primary-dark shadow-sm shadow-accent-light dark:shadow-accent-dark m-2 rounded-2xl my-1 mx-2 p-2 flex-row items-center"
        >
            <View className="flex-1  pr-2">
                <Text className="text-textPrimary-light dark:text-textPrimary-dark font-bold text-sm" numberOfLines={2}>
                    {article.title}
                </Text>
                <Text className="text-textPrimary-light dark:text-textPrimary-dark opacity-80 text-xs mt-1" numberOfLines={2}>
                    {article.description}
                </Text>
            </View>

            {/* Image on the Right */}
            {article.image?.url && (
                <Image
                    className="w-20 h-20 rounded-md"
                    source={{ uri: article.image.url }}
                />
            )}
        </TouchableOpacity>
    );
}
