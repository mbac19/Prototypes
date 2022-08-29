//
//  ContentView.swift
//  002-fin
//
//  Created by Brendan McNamara on 8/28/22.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            HStack(alignment: .center, spacing: 0) {
                Text("Manage Your\nSpending")
                    .font(DesignSpecs.titleFont)
                    .multilineTextAlignment(.leading)
                    .lineSpacing(4.0)

                Spacer()

                Circle()
                    .frame(width: 50, height: 50)
            }
            .listRowInsets(.init(top: 0, leading: 0, bottom: 0, trailing: 0))
            .listRowSeparator(.hidden)

            Text("Welcome Back, Josh")
                .listRowInsets(.init(top: 0, leading: 0, bottom: 0, trailing: 0))
                .font(DesignSpecs.subtitleFont)
                .listRowSeparator(.hidden)
                .padding(.zero)

            VStack {
                Rectangle()
                    .fill(Color.cyan)
                    .frame(height: 150)
                    .cornerRadius(12.0)
            }
            .listRowInsets(.init(top: 0, leading: 0, bottom: 0, trailing: 0))
            // TODO: Would like this to have a height set by some aspect ratio.
            .padding(.top, 20)
            .listRowSeparator(.hidden)

            HStack {
                Text("Transactions")
                    .font(DesignSpecs.sectionHeaderFont)

                Spacer()
                Button(action: { print("ON TAP VIEW ALL" )}) {
                    Text("View All")
                        .font(DesignSpecs.buttonFont)
                }
            }
            .listRowSeparator(.hidden)
            .listRowInsets(.init(top: 0, leading: 0, bottom: 0, trailing: 0))
            .padding(.zero)
            .listRowInsets(.none)

            ForEach(0..<10) { i in
                HStack {
                    Circle()
                        .fill(DesignSpecs.transactionIconColors.randomElement()!)
                        .frame(width: 40, height: 40)

                    VStack(alignment: .leading) {
                        Text("Money Trasfer")
                            .font(DesignSpecs.primaryBoldFont)
                            .padding(.bottom, 2)

                        Text("28 Aug, 2019")
                            .font(DesignSpecs.asideFont)
                    }
                    .padding(.leading, 12)

                    Spacer()

                    Text("-12,000 NGN")
                        .font(DesignSpecs.primaryFont)

                }
                .padding(12)
                .overlay(
                    RoundedRectangle(cornerRadius: 8.0)
                        .strokeBorder(Color(.displayP3, white: 0.9, opacity: 1.0))
                )
                .padding(.bottom, 8)
            }
            .listRowSeparator(.hidden)
            .listRowInsets(.init(top: 0, leading: 0, bottom: 0, trailing: 0))
            .padding(.zero)


        }
        .listStyle(.plain)
        .listRowInsets(.none)
        .listRowSeparator(.hidden)
        .padding(.horizontal, 20)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
            .previewDevice(PreviewDevice(rawValue: "iPhone 13"))
    }
}
