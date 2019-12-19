import { FieldPacket } from "mysql2";
import { ShopItemType } from "../../react-client/src/constants/interfaces";
import pool from "../database";

/**
 * Represents rows for shopItems table in database.
 */
class ShopItem implements ShopItemType {
    shopItemId: number;
    shopItemGameId: number;
    shopItemTeamId: number;
    shopItemTypeId: number;

    constructor(shopItemId: number) {
        this.shopItemId = shopItemId;
    }

    /**
     * Get's information from database about this object.
     */
    async init() {
        const queryString = "SELECT * FROM shopItems WHERE shopItemId = ?";
        const inserts = [this.shopItemId];
        const [results, fields]: [any[], FieldPacket[]] = await pool.query(queryString, inserts);

        if (results.length != 1) {
            return null;
        } else {
            Object.assign(this, results[0]);
            return this;
        }
    }

    /**
     * Delete this ShopItem from the database.
     */
    async delete() {
        const queryString = "DELETE FROM shopItems WHERE shopItemId = ?";
        const inserts = [this.shopItemId];
        await pool.query(queryString, inserts);
    }

    /**
     * Insert a ShopItem into the database.
     */
    static async insert(shopItemGameId: number, shopItemTeamId: number, shopItemTypeId: number) {
        const queryString = "INSERT INTO shopItems (shopItemGameId, shopItemTeamId, shopItemTypeId) values (?, ?, ?)";
        const inserts = [shopItemGameId, shopItemTeamId, shopItemTypeId];
        const [results, fields] = await pool.query(queryString, inserts);
        const thisShopItem = await new ShopItem(results.insertId).init(); //TODO: this could fail, need to handle that error (rare tho)
        return thisShopItem;
    }

    /**
     * Delete all ShopItems in the database for this game's team.
     */
    static async deleteAll(gameId: number, gameTeam: number) {
        const queryString = "DELETE FROM shopItems WHERE shopItemGameId = ? AND shopItemTeamId = ?";
        const inserts = [gameId, gameTeam];
        await pool.query(queryString, inserts);
    }

    /**
     * Get all ShopItems in the database for this game's team.
     */
    static async all(gameId: number, gameTeam: number) {
        const queryString = "SELECT * FROM shopItems WHERE shopItemGameId = ? AND shopItemTeamId = ?";
        const inserts = [gameId, gameTeam];
        const [shopItems] = await pool.query(queryString, inserts);
        return shopItems;
    }
}

export default ShopItem;
