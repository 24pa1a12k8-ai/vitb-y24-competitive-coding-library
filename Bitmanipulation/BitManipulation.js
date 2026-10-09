
class BitManipulation {
    static getBit(n, k) {
        n = BigInt(n);
        return (n >> BigInt(k)) & 1n;
    }

    static setBit(n, k) {
        n = BigInt(n);
        return (1n << BigInt(k)) | n;
    }

    static clearBit(n, k) {
        n = BigInt(n);
        return n & ~(1n << BigInt(k));
    }

    static toggleBit(n, k) {
        n = BigInt(n);
        return n ^ (1n << BigInt(k));
    }

    static isPowerOfTwo(n) {
        n = BigInt(n);
        if (n > 0n && (n & (n - 1n)) === 0n) {
            return true;
        }
        return false;
    }

    static countSetBits(n) {
        n = BigInt(n);
        let count = 0;

        while (n > 0n) {
            n = n & (n - 1n);
            count++;
        }

        return count;
    }
}