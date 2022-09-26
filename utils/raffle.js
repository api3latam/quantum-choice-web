import { getContracts } from "./contracts";

export async function enterRaffle(
    raffleId, 
    targetAddress) {
        const { raffle } = await getContracts();

        await raffle.enter(
            raffleId,
            targetAddress
        )
};

export async function getParticipants(raffleId) {
    const { raffle } = await getContracts();

    const entries = await raffle.getEntries(raffleId);
    return entries;
};

export async function getHistory(targetAddress) {
    const { raffle } = await getContracts();

    const raffleIds = await raffle.getEnteredRaffles(targetAddress);
    return raffleIds;
}
