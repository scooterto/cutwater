"""
Cutwater Example Agent using Claude Agent SDK
"""
import os
import anthropic


def main():
    # Initialize the client (uses ANTHROPIC_API_KEY env variable)
    client = anthropic.Anthropic()

    # Create a simple conversation
    message = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=1024,
        messages=[
            {
                "role": "user",
                "content": "Hello! I'm testing the Claude Agent SDK. Please introduce yourself briefly.",
            }
        ],
    )

    # Print the response
    print("Claude's response:")
    print(message.content[0].text)


if __name__ == "__main__":
    # Check for API key
    if not os.environ.get("ANTHROPIC_API_KEY"):
        print("Error: ANTHROPIC_API_KEY environment variable not set.")
        print("Set it with: export ANTHROPIC_API_KEY='your-api-key'")
        exit(1)

    main()
