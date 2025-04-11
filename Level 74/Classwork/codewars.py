
# Codewars 1

def get_participants(handshakes):
    n = 1
    while n * (n - 1) // 2 < handshakes:
        n += 1
    return n

# Codewars 2

def good_vs_evil(good, evil):
    good_worth = [1, 2, 3, 3, 4, 10]
    evil_worth = [1, 2, 2, 2, 3, 5, 10]

    good_counts = map(int, good.split())
    evil_counts = map(int, evil.split())

    good_total = sum(count * worth for count, worth in zip(good_counts, good_worth))
    evil_total = sum(count * worth for count, worth in zip(evil_counts, evil_worth))

    if good_total > evil_total:
        return "Battle Result: Good triumphs over Evil"
    elif evil_total > good_total:
        return "Battle Result: Evil eradicates all trace of Good"
    else:
        return "Battle Result: No victor on this battle field"
    

# Codewars 3

def delete_nth(order, max_e):
    counts = {}
    result = []
    for num in order:
        if counts.get(num, 0) < max_e:
            result.append(num)
            counts[num] = counts.get(num, 0) + 1
    return result