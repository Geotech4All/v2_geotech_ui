import { Page } from "@/components/common";
import { Filter, Search } from "@/components/opportunites";

export default async function Opportunites() {
    return (
        <Page>
            <div className="flex gap-3 w-full">
                <Filter />
                <div className="flex-1">
                    <Search />
                </div>
            </div>
        </Page>
    )
}
