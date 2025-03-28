import { useState } from "react";
import Editor from "@monaco-editor/react";

function DSAPlayground() {
  const patterns = [
    {
      name: "Two Pointers",
      problems: [
        {
          title: "Reverse String",
          description: "Reverse the characters of a string in-place.",
          code: `function reverseString(str) {
        let left = 0, right = str.length - 1;
        const arr = str.split('');
        while (left < right) {
          [arr[left], arr[right]] = [arr[right], arr[left]];
          left++; right--;
        }
        return arr.join('');
      }`,
          explanation:
            "We use two pointers to swap characters from both ends, moving inward.",
        },
      ],
    },

    {
      name: "Sliding Window",
      problems: [
        {
          title: "Maximum Sum Subarray of Size K",
          description: "Find the max sum of any contiguous subarray of size k.",
          code: `function maxSumSubarray(arr, k) {
        let maxSum = 0, windowSum = 0;
        for (let i = 0; i < k; i++) windowSum += arr[i];
        maxSum = windowSum;
      
        for (let i = k; i < arr.length; i++) {
          windowSum += arr[i] - arr[i - k];
          maxSum = Math.max(maxSum, windowSum);
        }
      
        return maxSum;
      }`,
          explanation:
            "We maintain a sliding window of size k and update the sum as the window moves.",
        },
      ],
    },

    {
      name: "Hashing",
      problems: [
        {
          title: "Two Sum",
          description:
            "Return indices of the two numbers such that they add up to a target.",
          code: `function twoSum(nums, target) {
        const map = {};
        for (let i = 0; i < nums.length; i++) {
          const complement = target - nums[i];
          if (map[complement] !== undefined) {
            return [map[complement], i];
          }
          map[nums[i]] = i;
        }
      }`,
          explanation:
            "We use a hash map to store seen numbers and their indices, checking if the complement exists.",
        },
      ],
    },

    {
      name: "Binary Search",
      problems: [
        {
          title: "Search Insert Position",
          description:
            "Find index of target or insert position in a sorted array.",
          code: `function searchInsert(nums, target) {
        let left = 0, right = nums.length - 1;
        while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          if (nums[mid] === target) return mid;
          if (nums[mid] < target) left = mid + 1;
          else right = mid - 1;
        }
        return left;
      }`,
          explanation:
            "Binary search to find either the target index or where it should be inserted.",
        },
      ],
    },
  ];

  return (
    <section id="dsa" className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          DSA Playground
        </h2>

        {patterns.map((pattern) => (
          <div key={pattern.name} className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              {pattern.name}
            </h3>
            {pattern.problems.map((problem) => {
              const [outputVisible, setOutputVisible] = useState(false);

              const handleRunClick = () => {
                setOutputVisible(true);
              };

              return (
                <div
                  key={problem.title}
                  className="bg-white p-6 rounded shadow-md mb-6"
                >
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {problem.title}
                  </h4>
                  <p className="text-gray-700 mb-4">{problem.description}</p>

                  <Editor
                    height="200px"
                    defaultLanguage="javascript"
                    defaultValue={problem.code}
                    theme="vs-dark"
                    options={{
                      fontSize: 14,
                      minimap: { enabled: false },
                      scrollBeyondLastLine: false,
                      wordWrap: "on",
                    }}
                  />

                  <button
                    onClick={handleRunClick}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    Run Code
                  </button>

                  {outputVisible && (
                    <div className="mt-4 bg-gray-100 p-4 rounded text-left text-sm text-gray-800 font-mono">
                      <p className="mb-2 font-semibold text-gray-600">
                        📤 Output:
                      </p>
                      <p className="text-green-700">
                        {/* You can customize this per problem later */}
                        {problem.title === "Reverse String" && `olleh`}
                        {problem.title === "Maximum Sum Subarray of Size K" &&
                          `21`}
                        {problem.title === "Two Sum" && `[0, 1]`}
                        {problem.title === "Search Insert Position" && `2`}
                      </p>
                    </div>
                  )}

                  <p className="text-gray-600 italic mt-4">
                    {problem.explanation}
                  </p>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

export default DSAPlayground;
